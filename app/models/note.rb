class Note < ActiveRecord::Base

  enum emotion: {
    happy: 0, 
    meh: 1, 
    sad: 2
  } 

end
