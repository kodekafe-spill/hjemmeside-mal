/*Dette scriptet bytter på å vise de ulike hoved-divene ettersom man klikke på de forskjellige linkene i header. Den man klikker på vises mens resten får display:none og gjemmes*/
/*funksjonene kalles i navbar-linkene på html-sidene*/

    function hjem() {
        var home = document.getElementById("hjem");
        var about = document.getElementById("om_oss");
        var what = document.getElementById("hva_gjor_vi");
        var project = document.getElementById("prosjekter");
        home.style.display = "block";
        about.style.display = "none";
        what.style.display = "none";
        project.style.display = "none";
    }
    
    function om_oss() {
        var home = document.getElementById("hjem");
        var about = document.getElementById("om_oss");
        var what = document.getElementById("hva_gjor_vi");
        var project = document.getElementById("prosjekter");
        about.style.display = "block";
        home.style.display = "none";
        what.style.display = "none";
        project.style.display = "none";
    }
    
    function hva_gjor_vi() {
        var home = document.getElementById("hjem");
        var about = document.getElementById("om_oss");
        var what = document.getElementById("hva_gjor_vi");
        var project = document.getElementById("prosjekter");
        what.style.display = "block";
        about.style.display = "none";
        home.style.display = "none";
        project.style.display = "none";
    }
    
    function prosjekter() {
        var home = document.getElementById("hjem");
        var about = document.getElementById("om_oss");
        var what = document.getElementById("hva_gjor_vi");
        var project = document.getElementById("prosjekter");
        project.style.display = "block";
        about.style.display = "none";
        what.style.display = "none";
        home.style.display = "none";
    }
    
    document.addEventListener('DOMContentLoaded', function(){
        hjem();
        });

