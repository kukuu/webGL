
const canvas = document.querySelector('canvas');
const gl = convas.getContext('webgl');

if(!gl) {
	throw new Error('WebGL not supported');
}

//alert(`All looks good here with WebGL`);

//Create a scratch script

//vertexData = [...]
//create a buffer
//Load vertex data into buffer


//Create vertex shader
//create fragment shader
//create program
//attach shaders to program

//enable vertex attributes

//draw

//We use the Right Handed Co-ordinate System
//Draw a triangle

const vertexData = [
	0, 1, 0,
	1, -1, 0,
	-1, -1, 0,
]

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER,  new Float32Array(vertexData), gl.STATIC_DRAW);


//Create vertex shader
//pass resource from GPU as string. This is not provided by JavaScript
//Paased as a string
//This is void as no return is expected
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shadeSource(vertexShader, 
	`attribute vec3 position;
	void main() {
		gl_Position = vec4(position, 1)
	}
	`);

gl.compileShader(vertexShader);


//Create fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shadeSource(fragmentShader, `
	void main() {
		gl_FragColor = vec4(1, 0, 0, 1)
	}
	`);

gl.compileShader(fragmentShader);