
const canvas = document.querySelector('canvas');
const gl = convas.getContext('webgl');

if(!gl) {
	throw new Error('WebGL not supported');
}

alert(`All looks good here with WebGL`);