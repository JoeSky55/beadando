fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
.then(x => x.json())
.then(y=> megjelenit(y));

function megjelenit(y)
{
    id = 0
    //console.log(y)
    sz= ""
    for (const elem of y) {
        sz+=`
        <div class="col-lg-3">
        <!-- Button -->
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${id}">
            
            <div class="card" style="width:400px; height: 350px; container-fluid; background-color: #64AED0;">
              <img class=" stilus_hover kep" src="${elem.Images[0]}" alt="Card image" style="width:100%">
              <div class="card-body">
                <h2 class="card-title">${elem.Title}</h2>
                
                <a href="#${id}" class="btn "></a>
              </div>
            </div> 
        </button>

        <!-- The Modal -->
        <div class="modal" id="${id}">
        <div class="modal-dialog">
        <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header" style="background-color: #64AED0; " >
        <h4 class="modal-title">${elem.Title}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" style="background-color: #C5E6F5;">



      <div>
      <p>Kiadás Dátuma: ${elem.Released}</p>
      <p>Műfaja: ${elem.Genre}</p>
      <p>Rendező: ${elem.Director}</p>
      <p>Forgatókönyvíró: ${elem.Writer}</p>
      <p>Rövid összefoglaló: ${elem.Plot}</p>
      <p>További képek:</p>
      
      <div style="margin-left: 30px;" >
        <img class="stilus_hover kep" style="width: 400px;"  src="${elem.Images[1]}" alt="kép">
        
    </div>

        <br>
        <div style="margin-left: 30px;" >
        <img class="stilus_hover kep" style="width: 400px;"  src="${elem.Images[2]}" alt="kép">
        </div>
        </div>
            


      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Bezár</button>
      </div>

    </div>
  </div>
</div>
        








        
        </div>
        
    `
    id++

        //console.log(elem.Title)
    }
    
    document.getElementById("cimek").innerHTML+=sz

}