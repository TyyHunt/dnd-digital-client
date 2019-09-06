class CharactersController < ApplicationController

 def create
  character = Character.create!(
    name: params['character']['name'],
    level: params['character']['level'],
    str: params['character']['str'],
    dex: params['character']['dex'],
    con: params['character']['con'],
    int: params['character']['int'],
    wis: params['character']['wis'],
    cha: params['character']['cha'],
    user_id: params['character']['user_id']
    )
  if character
    render json: {
      character: character
    }
  else
    render json: { status: 500 }
  end
 end

 def index
  @user = User.find_by(user_id: params['character']['user_id'])
  render json: @user.characters
 end
end
