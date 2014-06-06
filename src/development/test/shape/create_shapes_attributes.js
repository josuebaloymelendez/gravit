(function () {
    function test(scene, page, layer, view) {
        var rect = new IFRectangle();
        rect.setProperties(['tl_sx', 'trf'], [50, new GTransform(100, 0, 0, 50, 110, 180)]);

        var style = new IFStyle();
        //style.appendChild(new IFStrokeStyle());
        //style.appendChild(new IFBlurFilter());
        var stroke = new IFStrokePaint();
        stroke.setProperties(['sw', 'sa'], [15, IFStrokePaint.Alignment.Inside]);
        style.appendChild(stroke);
        //style.appendChild(new IFDropShadowEffect());

        rect.getStyleSet().appendChild(style);

        style = new IFStyle();
        style.setProperty('opc', 0.5);
        var stroke = new IFStrokePaint();
        stroke.setProperties(['sw', 'sa'], [10, IFStrokePaint.Alignment.Outside]);
        style.appendChild(stroke);
        style.appendChild(new IFOffsetVEffect());
        rect.getStyleSet().appendChild(style);

        page.appendChild(rect);
    }

    gDevelopment.tests.push({
        title: 'Create Shapes with Attributes',
        category: 'Shape',
        test: test
    });

})();