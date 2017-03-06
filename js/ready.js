//Dom ready
var dom_ready = function(fn)
{
  //Check the ready state
  if(document.readyState != 'loading')
  {
    //Call the function
    return fn();
  }
  else
  {
    //Add the event listener
    document.addEventListener('DOMContentLoaded', fn);
  }
};

//Add the siimple_layout init method
dom_ready(function(){ return siimple_layout.init(); });
