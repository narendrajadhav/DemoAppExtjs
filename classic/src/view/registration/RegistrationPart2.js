Ext.define('TestDemoExt601.view.registration.RegistrationPart2', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    xtype: 'registrationPart2',
    title: 'Part 2',
    items: [{
        xtype: 'panel',
        layout: 'vbox',
        defaults: {
            width: '100%',
            flex: 1
        },
        items: [{
            xtype: 'fieldset',
            title: 'Education Details',
            items: [{
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                defaults: {
                    xtype: 'textfield',
                    flex: 1,
                    width: '100%',
                    margin: 20,
                    labelWidth: 150,
                    allowBlank: false
                },
                items: [{
                    fieldLabel: 'Education *',
                    name: 'Eduction'
                }, {
                    fieldLabel: 'Percentage/Class *',
                    name: 'Percentage_Class'
                }, {
                    fieldLabel: 'Grade *',
                    name: 'Grade'
                }]
            }, {
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                defaults: {
                    xtype: 'textfield',
                    flex: 1,
                    width: '100%',
                    margin: 20,
                    labelWidth: 150,
                    allowBlank: false
                },
                items: [{
                    fieldLabel: 'Exambody *',
                    name: 'Exambody'
                }, {
                    fieldLabel: 'State *',
                    name: 'State'
                }, {
                    fieldLabel: 'Year *',
                    name: 'Year'
                }]
            }]
        }, {
            xtype: 'fieldset',
            title: 'Experience Details',
            items: [{
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                defaults: {
                    xtype: 'textfield',
                    flex: 1,
                    width: '100%',
                    margin: 20,
                    labelWidth: 150,
                    allowBlank: false
                },
                items: [{
                    fieldLabel: 'Exp. Type *',
                    name: 'ExpType'
                }, {
                    fieldLabel: 'Exp. Year*',
                    name: 'ExpYear'
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'Date Form *',
                    editable: false,
                    name: 'DateFrom'
                }, {
                    xtype: 'datefield',
                    editable: false,
                    fieldLabel: 'Date To *',
                    name: 'DateTo'
                }, {
                    fieldLabel: 'Company Name *',
                    name: 'CompanyName'
                }]
            }]
        }]
    }],
    listeners: {
        dirtychange: 'onFormDirtyChange',
        _validitychange0: 'onFormValidityChange',
        _validitychange1: 'onFormValidityChange',
        validitychange: function () {
            var me = this,
                args = Ext.toArray(arguments, 0, -1);
            args.unshift('_validitychange0');
            me.fireEvent.apply(me, args);
            args[0] = '_validitychange1';
            me.fireEvent.apply(me, args);
        }
    },
    fbar: [{
            text: 'Previous',
            handler: 'onPreButtonClick',
            viewname: 'registrationPart1'
        },
        '->', {
            text: 'Reset',
            disabled: true
        }, {
            text: 'Next',
            handler: 'onNextButtonClick',
            viewname: 'registrationPart3'
        }
    ]
});