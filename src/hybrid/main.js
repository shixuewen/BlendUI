require(['src/hybrid/blend', 'src/hybrid/Layer', 'src/hybrid/LayerGroup', 'src/hybrid/Slider'], function(blend, Layer, LayerGroup, Slider) {
    /*window.Blend = window.Blend || {};
    window.Blend.ui = blend ||{};
    window.Blend.Layer = Layer;
    window.Blend.LayerGroup = LayerGroup;
    window.Blend.Slider = Slider;*/
    blend = blend||{};
    blend.Layer = Layer;
    blend.LayerGroup = LayerGroup;
    blend.Slider = Slider;

    window.Blend = window.Blend || {};
    window.Blend.ui = blend;
    console && console.log('====BlendUI Ok======');
    
    //自定义blendready事件
    var _event = null;
    if (window.CustomEvent) {
        _event = new CustomEvent('blendready', {
            bubbles: false,
            cancelable: false
        });
    }else {
        _event = document.createEvent('Event');
        _event.initEvent('blendready', false, false);
    }
    blend.ready(function() {
        document.dispatchEvent(_event);
        blend._lanch(blend.getLayerId(),document.querySelector("body"));
    });
    //todo ready读取属性
},null, true);

