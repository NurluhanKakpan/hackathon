import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

export function Room(){

    const {roomId} = useParams();
    console.log(roomId)
    const meeting = async (element) =>{
        const appID = 1795530549;
        const serverSecret = "8e68f8b406ca25f5760b029c4813faaf";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,Date.now().toString(),
            "Nurlykhan");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario : {
                mode:ZegoUIKitPrebuilt.GroupCall,
            }
        })
    };
    return(
        <div ref={meeting}  style={{width : "100vw", height:"100vh"}}></div>
    )
}