// Registering component in box-component.js
AFRAME.registerComponent("move", {
  schema: {
    moveY: { type: "number", default: 1 },
  },

  tick: function () {
    var pos = this.el.getAttribute("position");
    this.data.moveY = this.data.moveY + 0.01;    

    pos.y =  this.data.moveY;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z}); 


  }
});
AFRAME.registerComponent("camera-zoom-out", {
  schema: {
    moveY: { type: "number", default: 10 },
  },

  tick: function () {
    this.data.moveY = this.data.moveY +0.01;

        var pos = this.el.getAttribute("position");

      pos.z =   this.data.moveY;

      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});


  }
});

AFRAME.registerComponent("fall-down", {
  schema: {
    moveY: { type: "number", default: 0 },
  },
  init: function(){
    this.entities = document.querySelectorAll('.clickable')
  },

  tick: function () {
    
    //var sceneEl = document.querySelector('a-scene');
    for (let i = 0; i < this.entities.length; i++) {
      console.log(this.entities)
      
    }
    //console.log(sceneEl)
    //var part3=document.getElementById( 'part3' );
     //console.log(this.el)
    // window.addEventListener("click", e => {  
    //   console.log(e)
    //   console.log(part3)
    //   this.data.moveY = this.data.moveY - 0.00001;     
      
    // })
    // var pos = this.el.getAttribute("position");

    // pos.y = pos.y+  this.data.moveY;

    // this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z}); 


  }
  
});