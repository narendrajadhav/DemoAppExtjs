Ext.define('TestDemoExt601.view.registration.Registration', {
    extend: 'Ext.panel.Panel',
    layout: 'card',
    xtype: 'registration',
    cls: 'animated',
    controller: 'registrationController',
    items: [{
        xtype: 'registrationPart1'
    }]
});