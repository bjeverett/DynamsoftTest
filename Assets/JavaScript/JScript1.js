
Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);
var DWObject;

function Dynamsoft_OnReady() {
    alert("Dynamsoft_OnReady() is called.");
    DWObject = Dynamsoft.WebTwainEnv.GetWebTwain("dwtcontrolContainer");
    //DWObject.LogLevel = 1;
}

function DoScan() {
    //    DWObject = gWebTwain.getInstance();
    DWObject = Dynamsoft.WebTwainEnv.GetWebTwain("dwtcontrolContainer");

    if (DWObject) {
        if (DWObject.SourceCount === 0) {
            $("#resId").text("Error: Unable to detect a twain compatible scanner.");
            return;
        }

        // clear leftovers from buffer if they exist
        if (DWObject.HowManyImagesInBuffer > 0) {
            DWObject.RemoveAllImages();
        }

        // register events
        DWObject.RegisterEvent('OnPreTransfer', OnPreTransfer);
        DWObject.RegisterEvent('OnPostAllTransfers', OnPostAllTransfers);
        DWObject.RegisterEvent('OnTransferCancelled', OnTransferCancelled);

        /* use a separate process for document scanning */
        DWObject.BrokerProcessType = 1;

        // Prepare selected scanner
        DWObject.CloseSource();
        DWObject.OpenSource();

        // set color/black-white/gray scale
        DWObject.PixelType = $("input:radio[name=BlWhChkBox]:checked").val();

        // set resolution
        DWObject.Resolution = $('input:radio[name=Dpi]:checked').val();

        // hide ui 
        DWObject.IfShowUI = true;
        DWObject.IfShowIndicator = true;
        DWObject.IfShowCancelDialogWhenImageTransfer = false;

        // only scan one side
        DWObject.IfDuplexEnabled = false;
        DWObject.IfAutoFeed = true;

        DWObject.IfFeederEnabled = false;

        // reset cancel flag
//        userCancelFlag = false;

        // perform the scan
        DWObject.AcquireImage();
    } else {
        $("#resId").text("DWObject error.");
    }
}
