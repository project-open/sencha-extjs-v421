/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  https://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at https://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
/**
 *
 * Norwegian translation (Bokmål: no-NB)
 * By Tore Kjørsvik 21-January-2008
 *
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            Mai: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Okt: 9,
            Nov: 10,
            Des: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'kr',
            // Norwegian Krone
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.no_NB.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.no_NB.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} markert(e) rad(er)"
});

Ext.define("Ext.locale.no_NB.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Lukk denne fanen"
});

Ext.define("Ext.locale.no_NB.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Verdien i dette feltet er ugyldig"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.no_NB.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Laster..."
});

Ext.define("Ext.locale.no_NB.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "I dag",
    minText: "Denne datoen er før tidligste tillatte dato",
    maxText: "Denne datoen er etter seneste tillatte dato",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Neste måned (Control+Pil Høyre)',
    prevText: 'Forrige måned (Control+Pil Venstre)',
    monthYearText: 'Velg en måned (Control+Pil Opp/Ned for å skifte år)',
    todayTip: "{0} (Mellomrom)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.no_NB.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Avbryt"
});

Ext.define("Ext.locale.no_NB.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Side",
    afterPageText: "av {0}",
    firstText: "Første side",
    prevText: "Forrige side",
    nextText: "Neste side",
    lastText: "Siste side",
    refreshText: "Oppdater",
    displayMsg: "Viser {0} - {1} av {2}",
    emptyMsg: 'Ingen data å vise'
});

Ext.define("Ext.locale.no_NB.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Den minste lengden for dette feltet er {0}",
    maxLengthText: "Den største lengden for dette feltet er {0}",
    blankText: "Dette feltet er påkrevd",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.no_NB.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Den minste verdien for dette feltet er {0}",
    maxText: "Den største verdien for dette feltet er {0}",
    nanText: "{0} er ikke et gyldig nummer"
});

Ext.define("Ext.locale.no_NB.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Deaktivert",
    disabledDatesText: "Deaktivert",
    minText: "Datoen i dette feltet må være etter {0}",
    maxText: "Datoen i dette feltet må være før {0}",
    invalidText: "{0} er ikke en gyldig dato - den må være på formatet {1}",
    format: "d.m.y",
    altFormats: "d.m.Y|d/m/y|d/m/Y|d-m-y|d-m-Y|d.m|d/m|d-m|dm|dmy|dmY|Y-m-d|d"
});

Ext.define("Ext.locale.no_NB.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Laster..."
    });
});

Ext.define("Ext.locale.no.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Dette feltet skal være en epost adresse på formatet "bruker@domene.no"',
    urlText: 'Dette feltet skal være en link (URL) på formatet "http:/' + '/www.domene.no"',
    alphaText: 'Dette feltet skal kun inneholde bokstaver og _',
    alphanumText: 'Dette feltet skal kun inneholde bokstaver, tall og _'
});

Ext.define("Ext.locale.no_NB.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Vennligst skriv inn URL for lenken:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Fet (Ctrl+B)',
                text: 'Gjør den valgte teksten fet.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Kursiv (Ctrl+I)',
                text: 'Gjør den valgte teksten kursiv.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Understrek (Ctrl+U)',
                text: 'Understrek den valgte teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Forstørr tekst',
                text: 'Gjør fontstørrelse større.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Forminsk tekst',
                text: 'Gjør fontstørrelse mindre.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Tekst markeringsfarge',
                text: 'Endre bakgrunnsfarge til den valgte teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Font farge',
                text: 'Endre farge på den valgte teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Venstrejuster tekst',
                text: 'Venstrejuster teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Sentrer tekst',
                text: 'Sentrer teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Høyrejuster tekst',
                text: 'Høyrejuster teksten.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Punktliste',
                text: 'Start en punktliste.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Nummerert liste',
                text: 'Start en nummerert liste.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Lenke',
                text: 'Gjør den valgte teksten til en lenke.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Rediger kilde',
                text: 'Bytt til kilderedigeringsvisning.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.no_NB.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sorter stigende",
    sortDescText: "Sorter synkende",
    lockText: "Lås kolonne",
    unlockText: "Lås opp kolonne",
    columnsText: "Kolonner"
});

Ext.define("Ext.locale.no_NB.grid.GroupingFeature", {
    override: "Ext.grid.GroupingFeature",
    emptyGroupText: '(Ingen)',
    groupByText: 'Grupper etter dette feltet',
    showGroupsText: 'Vis i grupper'
});

Ext.define("Ext.locale.no_NB.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Navn",
    valueText: "Verdi",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.no.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Avbryt",
        yes: "Ja",
        no: "Nei"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.no_NB.Component", {	
    override: "Ext.Component"
});

