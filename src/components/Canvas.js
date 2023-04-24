import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.lineWidth = 4;
        const centerX = canvas.width/2;
        const centerY = canvas.height/2;
        const rate = 0.1; // Number of rotations per second

        function drawCircles(angle) {
            context.beginPath();


            context.translate(centerX, centerY);
            context.rotate(2 * Math.PI / 180);
            context.translate(-centerX, -centerY);

            //set white as the fill color
            context.fillStyle="white";

            //draw arc from 0 to 1*PI
            context.beginPath();
            context.arc(centerX, centerY, 60, 0, 1*Math.PI);
            context.closePath();

            //fill with white
            context.fill();

            //set red as the fill color
            context.fillStyle="rgb(150,0,0)";

            //draw arc from 1*PI to 0
            context.beginPath();
            context.arc(centerX, centerY, 60, 1*Math.PI, 0);
            context.closePath();


            //fill with red
            context.fill();


            context.beginPath();
            context.arc(centerX, centerY, 12, 0, 2*Math.PI);
            context.fillStyle="white";
            context.closePath();

            context.fill();
            context.stroke();
        }


        requestAnimationFrame(renderLoop);  // rAF to start animation

        function renderLoop(time) {  // rAF callback
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

            drawCircles(((time * Math.PI * 2) / 1000) * rate);

            requestAnimationFrame(renderLoop);  // request next frame
        }
       
        
    }, [])

    return <div><canvas ref={canvasRef} {...props}  />
    
    </div> 
}

export default Canvas
