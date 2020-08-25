class LikesController < ApplicationController
  before_action :set_like, only: [:create, :show, :update, :destroy]

  #GET /users/user:id/posts/post:id/likes
  def index
    @likes = Like.where(poem_id: params[:poem_id])
    @mine = @likes.where(user_id: params[:user_id]).length()

    render json: {count: @likes.length(), mine: @mine}
  end

  # GET /likes/1
  def show 
    render json: @like
  end

  # POST /likes
  def create
    @likes = Like.where(poem_id: params[:poem_id])
    @mine = @likes.where(user_id: params[:user_id])

    if already_liked?
      @like.destroy
      render json: {count: @likes.length(), mine: @mine.length()}
    else
      @poem = Poem.find(params[:poem_id])
      @poem.likes.create(user_id: params[:user_id])
      render json: {count: @likes.length(), mine: @mine.length()}
    end
  end

  # PATCH/PUT /likes/1
  def update
    if @like.update(like_params)
      render json: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like.destroy
  end

  # CUSTOM GET /likes
  def all_likes
    @likes = Like.joins(:poem).select(
      "likes.id,
      likes.user_id,
      likes.poem_id,
      poems.username,
      poems.title,
      poems.text"
    )
    render json: @likes
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    # def find_poem
    #   @poem = Poem.find(params[:poem_id])
    # end

    def set_like
      @poem = Poem.find(params[:poem_id])
      @like = @poem.likes.where(user_id: params[:user_id])[0]
    end

    def already_liked?
      Like.where(user_id: params[:user_id], poem_id: params[:poem_id]).exists?
    end  

    
end
