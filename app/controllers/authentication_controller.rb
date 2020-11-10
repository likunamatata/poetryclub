class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(login_params[:username])

    if @user == nil #username doesnt exist in our db
      pp @user
      render json: { errors: 'unauthorized' }
    elsif @user.authenticate(login_params[:password]) #authenticate password. method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, username: @user.username)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' } #wrong pw

    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end


  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end
end
