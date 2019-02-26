class UsersController < ApplicationController
  include Pagy::Backend

  def index
    @pagy, @users = pagy(User.all)
  end

  def search
    @pagy, @users = if params[:query]
                      @input = params[:query]
                      # pagy(User.where("LOWER(first_name) LIKE ?", "%#{params[:query].downcase}%"))
                      # pagy_elasticsearch_rails(User.pagy_search(params[:query]))
                      a = {
                        query: {
                          dis_max: {
                            queries: [
                              { fuzzy: { first_name: params[:query] } },
                              { fuzzy: { last_name: params[:query] } }
                            ]
                          }
                        }
                      }

                      records = User.pagy_search(a).records
                      pagy_elasticsearch_rails(records)
                    else
                      @input = ""
                      pagy(User.all)
                    end

    if params[:page]
      render "index"
    else
      render partial: "narrowing"
    end
  end

  def sort
    @pagy, @users = if params[:query]
                      pagy(User.where("LOWER(first_name) LIKE ?", "%#{params[:query].downcase}%").
                           order("#{params[:field]} #{params[:dir]}"))
                    else
                      pagy(User.order("#{params[:field]} #{params[:dir]}"))
                    end

    if params[:page]
      render "index"
    else
      render partial: "users"
    end
  end
end
