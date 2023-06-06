'use client'

const ClickHandlers = () => {
    window.onclick = (e)=> {
        if(window.innerWidth < 1050 && document.getElementById('nav-links-id').classList.contains('show-nav') && e.target.id != 'imgid' ){
        document.getElementById('backdropid').classList.toggle("backdrop");
        document.getElementById('nav-links-id').classList.toggle("show-nav");
      }
    }

    return <div></div>
}

export default ClickHandlers