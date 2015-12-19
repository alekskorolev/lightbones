var body = document.querySelector('body'),
    qunitEl = document.createElement('div'),
    qunitFixtEl = document.createElement('div');

qunitEl.id = 'qunit';
qunitFixtEl.id = 'qunit-fixture';

body.appendChild(qunitEl);
body.appendChild(qunitFixtEl);
/*
$('body').append(
    '<div id="qunit"></div>' +
    '<div id="qunit-fixture"></div>'
);*/
