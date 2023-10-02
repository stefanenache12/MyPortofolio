<script>
export default {
    name: "GameComponent",
    data() {
        return {

        }
    },
    methods: {

    },
	mounted() {
        const rotatingObj = this.$refs.rotatingObj;
        let isRotating = false;
        let startX, startY, startRotX, startRotY;

        rotatingObj.addEventListener('mousedown', (e) => {
            isRotating = true;
            startX = e.clientX;
            startY = e.clientY;
            startRotX = rotatingObj.style.transform
                ? parseFloat(rotatingObj.style.transform.split('rotateX(')[1].split('deg)')[0])
                : 0;
            startRotY = rotatingObj.style.transform
                ? parseFloat(rotatingObj.style.transform.split('rotateY(')[1].split('deg)')[0])
                : 0;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isRotating) return;

            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            const newRotX = startRotX + deltaY;
            const newRotY = startRotY + deltaX;

            rotatingObj.style.transform = `rotateX(${newRotX}deg) rotateY(${newRotY}deg)`;
        });

        window.addEventListener('mouseup', () => {
            isRotating = false;
        });
    }
}
</script>

<template>
	 <div class=" py-5 d-flex justify-content-center align-items-center">
        <div class="obj" ref="rotatingObj">
            <div class="objchild text-light stop-rotation">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col pb-3">
                            <h6>JavaScript</h6>
                            <i class="fa-brands fa-js fa-2xl" style="color: yellow;"></i>
                        </div>
                        <div class="col-6 pb-3">
                            <h6>VUE.js</h6>
                            <i class="fa-brands fa-vuejs fa-2xl" style="color: greenyellow;"></i>
                        </div>
                        <div class="col-6 pb-3">
                            <h6>Laravel</h6>
                            <i class="fa-brands fa-laravel fa-2xl" style="color: red;"></i>
                        </div>
                        <div class="col-6 pb-3">
                            <h6>NODE.js</h6>
                            <i class="fa-brands fa-node-js fa-2xl" style="color: green;"></i>
                        </div>
                        <div class="col-6 pb-3">
                            <h6>PHP</h6>
                            <i class="fa-brands fa-php fa-2xl" style="color: grey;"></i>
                        </div>
                        <div class="col-6 pb-3">
                            <h6>MySql</h6>
                            <i class="fa-solid fa-database" style="color: whitesmoke;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .obj {

        position: relative;
        width: 250px;
        height: 250px;
        transform-style: preserve-3d;
        transition: 0.5s all;
        transform: rotateX(-20deg) rotateY(20deg);
        cursor:pointer;
    }

    .objchild {

        animation: rotate 10s infinite linear;
        transform-style: preserve-3d;
        position: absolute;
        width: 100%;
        height: 100%;
        background:linear-gradient( to top,#4D5BCE,#4D5BCE ) ; 
    }

    .obj:hover .stop-rotation {
        animation-play-state: paused;
    }

    .objchild::after {
    content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(20px);
        box-shadow: 0 0 150px 15px rgb(35, 228, 96);
        transform: rotateX(90deg) scale(1) translateZ(0px);
    }

    @keyframes rotate {
    0% {
        transform: rotate3d(0,1,0,0deg);
    }

    100% {
        transform: rotate3d(0,1,0,360deg);
    }
    }

    @keyframes updown {
    0% {
        transform: translateY(100px) rotateX(90deg) translateZ(100px);
    }

    50% {
        transform: translateY(200px) rotateX(90deg) translateZ(100px);
    }

    100% {
        transform: translateY(100px) rotateX(90deg) translateZ(100px);
    }
    }
</style>