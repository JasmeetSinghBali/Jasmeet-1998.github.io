const about=document.querySelector('#about');
const contact=document.querySelector('#contact');
const aboutContent=document.querySelector('#about-content');
const contactContent=document.querySelector('#contact-content');

about.addEventListener('click',()=>{
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '600px',
    height: '800px',
    // to lock the user so that they cannot resize or click in background
    modal:true,
    top:50,
    right:50,
    bottom:50,
    left:50,
    mount: aboutContent,
    onfocus:function(){
      this.setBackground('#00aa00');
    },
    onblur:function(){
      this.setBackground('#777')
    }
  })
});

contact.addEventListener('click',()=>{
  const contactBox = new WinBox({
    modal:true,
    title: 'Contact Me',
    width: '600px',
    height: '600px',
    top:150,
    right:50,
    bottom:50,
    left:150,
    mount: contactContent,
    onfocus:function(){
      this.setBackground('#00aa00');
    },
    onblur:function(){
      this.setBackground('#777')
    }
  })
});
