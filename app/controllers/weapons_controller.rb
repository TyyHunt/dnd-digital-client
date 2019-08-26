class Api::WeaponsController < ApplicationController

 def index
   render json: Weapon.all
 end
 
end