

function getGLorDie(canvas) {
    const gl = canvas.getContext("webgl");
    if (!gl) {
        throw new Error('could not get GL');
    }
    return gl;
}

const canvas = document.querySelector('canvas');
console.log('got canvas ', canvas);

const gl = getGLorDie(canvas);

// Set clear color to black, fully opaque
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// Clear the color buffer with specified clear color
gl.clear(gl.COLOR_BUFFER_BIT);