
function App() {

  return (
    <div style={{background:"#dfe6e9",height:"100vh",}}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
           <div><PostComponent /><br /> </div>
           <div><PostComponent /><br /> </div>
           <div><PostComponent /><br /> </div>
       </div>
      </div>
    </div>
  
  )
}
//structuring the app into components
//defining the state of application

const style={width:200, backgroundColor:"white",bordercolor:"grey",borderWidth:1,padding:20}
function PostComponent(){
  return <div style={style}>
    <div style={{display:"flex"}}>
    <img src="" alt=""style={{
      width:20,
      height:20,
      borderRadius:20
    }} />
    <div style={{fontSize:10,marginLeft:10}}>
      <b>
        satwik
      </b>
      <div>161 followers</div>
      <div>11m</div>
    </div>
  </div>
  <div style={{fontSize:12}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab, nisi doloribus vel earum esse ex, cupiditate deleniti natus animi corrupti repellat quaerat ipsum mollitia, alias expedita minima numquam nesciunt?
  </div>
  </div>

}

export default App
