// Let us know it started
TTPLog("Loaded Turntable Pro");

// Seeing will go here
var TTPSettings = {

};

// Lets do this!
function TTPInitialize(){
        // mDoneLoadingDatabase = false;
        // setTimeout(GetDatabase(),50); //setTimeout(LoadDatabase, 1);
        
        // Probably should just attach a stylesheet in at the start, to take care of all the dynamic stuff...
        
        var $proStylesheet = $('<style>*{background:transparent;}</style>');
        
        $('body').prepend($proStylesheet);
        
        // Detect when a user enters and act accordingly...
        $('img').attr('src', 'http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif');
        
        // Maintain Turntable Extened compatibility
        // Check for On Tour tab
        // Check for Playlists Manager
}

/// This is where we begin :D
$(document).ready(TTPInitialize);