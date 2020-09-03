class PoemsController < ApplicationController
  before_action :set_poem, only: [:show, :update, :destroy]

  # GET /poems
  def index
    @poems = Poem.all.order(:id).reverse_order

    render json: @poems
  end

  # GET /poems/1
  def show
    render json: @poem
  end

  # POST /poems
  def create
    @poem = Poem.new(poem_params)

    if @poem.save
      render json: @poem, status: :created, location: @poem
    else
      render json: @poem.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /poems/1
  def update
    if @poem.update(poem_params)
      render json: @poem
    else
      render json: @poem.errors, status: :unprocessable_entity
    end
  end

  # DELETE /poems/1
  def destroy
    @poem.destroy
  end

  #-------CUSTOM-------#

  # GET /users/1/poems

  def user_poems
    @poems = Poem.where(user_id: params[:user_id]).order(:id).reverse_order
    render json:@poems
  end

  def search_poems
    print params[:keyword]
    @poems = Poem.where("title LIKE ? OR text LIKE ?", "%#{params[:keyword]}%", "%#{params[:keyword]}%")
    render json:@poems
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_poem
      @poem = Poem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def poem_params
      params.require(:poem).permit( :text, :user_id, :title, :username, :poem_json)
    end
end
