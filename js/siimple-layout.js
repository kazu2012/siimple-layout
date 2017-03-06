//
// siimple-layout: the layout module for siimple
// Under the MIT LICENSE.
// License:    https://github.com/siimple/siimple-layout/blob/master/LICENSE.md
// Repository: https://github.com/siimple-layout
// Website:    https://siimple.juanes.xyz
//

//Siimple layout object
var siimple_layout = {};

//Classes list
siimple_layout._class =
{
  LAYOUT: 'siimple-layout',
  LAYOUT_JS: 'siimple-layout-js',

  IS_VISIBLE: 'is-visible',

  SIDEBAR: 'siimple-layout-sidebar',
  SIDEBAR_BUTTON: 'siimple-layout-sidebar-button',
  SIDEBAR_OBFUSCATOR: 'siimple-layout-sidebar-obfuscator',

  HAS_SIDEBAR: 'siimple-layout--has-sidebar',
  HAS_SIDEBAR_FIXED: 'siimple-layout--has-sidebar-fixed',
  HAS_SIDEBAR_BUTTON: 'siimple-layout--has-sidebar-button'
};

//Init method
siimple_layout.init = function()
{
  //Get all the nodes
  var nodes_list = document.getElementsByClassName(this._class.LAYOUT + ' ' + this._class.LAYOUT_JS);

  //Check the nodes list size
  if(nodes_list.length === 0){ return; }

  //Initialize for each node
  for(var i = 0; i < nodes_list.length; i++)
  {
    //Initialize this element
    this.__init_element(nodes_list[i]);
  }
};

//Initialize an element
siimple_layout.__init_element = function(parent)
{
  //Save this
  var self = this;

  //Check if has sidebar
  if(parent.classList.contains(this._class.HAS_SIDEBAR) === true)
  {
    //Initialize the sidebar button
    this.__sidebar_button_init(parent);

    //Create the obfuscator
    this.__sidebar_obfuscator_init(parent);
  }
};

//Initialize the sidebar button event
siimple_layout.__sidebar_button_init = function(parent)
{
  //Save this
  var self = this;

  //Check if has the sidebar button
  if(parent.classList.contains(this._class.HAS_SIDEBAR_BUTTON) === false){ return; }

  //Check if has a child element with the button class
  var childs = parent.getElementsByClassName(this._class.SIDEBAR_BUTTON);

  //Check for empty list
  if(childs.length === 0){ return; }

  //Add the onclick event
  childs[0].addEventListener('click', function()
  {
    //Toggle the sidebar
    return self.__sidebar_toggle(parent);
  });
};

//Initialize the sidebar obfuscator
siimple_layout.__sidebar_obfuscator_init = function(parent)
{
  //Save this
  var self = this;

  //Initialize the obfuscator element
  var el = null;

  //Get the obfuscator elements
  var childs = parent.getElementsByClassName(this._class.SIDEBAR_OBFUSCATOR);

  //Check the number of obfuscator elements
  if(childs.length === 0)
  {
    //Create the new obfuscator element
    var el = document.createElement('div');

    //Add the obfuscator class
    el.classList.add(this._class.SIDEBAR_OBFUSCATOR);

    //Append the child
    parent.appendChild(el);
  }
  else
  {
    //Get the first obfuscator element
    el = childs[0];
  }

  //Add the event listener
  el.addEventListener('click', function()
  {
    //Toggle the sidebar
    return self.__sidebar_toggle(parent);
  });
};

//Toggle the sidebar
siimple_layout.__sidebar_toggle = function(parent)
{
  //Check for undefined parent
  if(typeof parent === 'undefined'){ return; }

  //Check if has sidebar
  if(parent.classList.contains(this._class.HAS_SIDEBAR) === false){ return; }

  //Check if has fixed sidebar
  if(parent.classList.contains(this._class.HAS_SIDEBAR_FIXED) === true){ return; }

  //Get the sidebar elements
  var sidebar = parent.getElementsByClassName(this._class.SIDEBAR);

  //Check for empty list
  if(sidebar.length === 0){ return; }

  //Add or hide the IS_VISIBLE class
  sidebar[0].classList.toggle(this._class.IS_VISIBLE);
};
