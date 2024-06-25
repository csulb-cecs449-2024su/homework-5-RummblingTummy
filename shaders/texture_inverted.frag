#version 330
// A fragment shader for rendering a mesh that has a texture, but no lighting.
layout (location=0) out vec4 FragColor;

// Input from vertices: interpolated texture coordinate.
in vec2 TexCoord;

// Uniform from application: the texture sampler.
uniform sampler2D baseTexture;

void main() {
    // Sample the texture image at the fragment's texture coordinate.
    FragColor = texture(baseTexture, TexCoord);
    float r = (1-FragColor.r);
    float b = (1-FragColor.b);
    float g = (1-FragColor.g);
    FragColor.r = r;
    FragColor.b = b;
    FragColor.g = g;
}