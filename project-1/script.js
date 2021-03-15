RGBA(`
    vec2 uv = gl_FragCoord.xy/resolution - 0.5;
    uv.x *= resolution.x/resolution.y;
    float a = 0.31415;
    float cs = cos(a), sn = sin(a);
    mat2 rot = mat2(cs, -sn, sn, cs); 
    for (float i=0.0; i<5.; i++ )
        uv = abs(uv*rot);  
    uv.y = fract(uv.y-fract(time/10.));
    uv.x = fract(uv.x-fract(time/21.));
    vec4 noise = texture2D(tex[0], uv);
    gl_FragColor = vec4( noise.rgb, 1.0); 
`, {
    textures: ['./images/Z7gtJYL.jpg']
});