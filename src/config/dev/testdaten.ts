/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
 * Copyright (C) 2020 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { type Magazin } from '../../magazin/entity/magazin.entity.js';
import { type Schlagwort } from './../../magazin/entity/schlagwort.entity.js';

// TypeORM kann keine SQL-Skripte ausfuehren

export const magazine: Magazin[] = [
    // -------------------------------------------------------------------------
    // L e s e n
    // -------------------------------------------------------------------------
    {
        id: '00000000-0000-0000-0000-000000000001',
        version: 0,
        titel: 'Alpha',
        rating: 4,
        art: 'DRUCKAUSGABE',
        verlag: 'A_VERLAG',
        preis: 11.1,
        rabatt: 0.011,
        lieferbar: true,
        datum: new Date('2022-02-01'),
        // "Konzeption und Realisierung eines aktiven Datenbanksystems"
        issn: '9783897225831',
        homepage: 'https://acme.at/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-01'),
        aktualisiert: new Date('2022-02-01'),
    },
    {
        id: '00000000-0000-0000-0000-000000000002',
        version: 0,
        titel: 'Beta',
        rating: 2,
        art: 'DIGITAL',
        verlag: 'B_VERLAG',
        preis: 22.2,
        rabatt: 0.022,
        lieferbar: true,
        datum: new Date('2022-02-02'),
        // "Verteilte Komponenten und Datenbankanbindung"
        issn: '9783827315526',
        homepage: 'https://acme.biz/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-02'),
        aktualisiert: new Date('2022-02-02'),
    },
    {
        id: '00000000-0000-0000-0000-000000000003',
        version: 0,
        titel: 'Gamma',
        rating: 1,
        art: 'DRUCKAUSGABE',
        verlag: 'A_VERLAG',
        preis: 33.3,
        rabatt: 0.033,
        lieferbar: true,
        datum: new Date('2022-02-03'),
        // "Design Patterns"
        issn: '9780201633610',
        homepage: 'https://acme.com/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-03'),
        aktualisiert: new Date('2022-02-03'),
    },
    // -------------------------------------------------------------------------
    // A e n d e r n
    // -------------------------------------------------------------------------
    {
        id: '00000000-0000-0000-0000-000000000040',
        version: 0,
        titel: 'Delta',
        rating: 3,
        art: 'DRUCKAUSGABE',
        verlag: 'B_VERLAG',
        preis: 44.4,
        rabatt: 0.044,
        lieferbar: true,
        datum: new Date('2022-02-04'),
        // "Freiburger Chormagazin"
        issn: '0007097328',
        homepage: 'https://acme.de/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-04'),
        aktualisiert: new Date('2022-02-04'),
    },
    // -------------------------------------------------------------------------
    // L o e s c h e n
    // -------------------------------------------------------------------------
    {
        id: '00000000-0000-0000-0000-000000000050',
        version: 0,
        titel: 'Epsilon',
        rating: 2,
        art: 'DIGITAL',
        verlag: 'A_VERLAG',
        preis: 55.5,
        rabatt: 0.055,
        lieferbar: true,
        datum: new Date('2022-02-05'),
        // "Maschinelle Lernverfahren zur Behandlung von Bonitätsrisiken im Mobilfunkgeschäft"
        issn: '9783824404810',
        homepage: 'https://acme.es/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-05'),
        aktualisiert: new Date('2022-02-05'),
    },
    {
        id: '00000000-0000-0000-0000-000000000060',
        version: 0,
        titel: 'Phi',
        rating: 2,
        art: 'DIGITAL',
        verlag: 'A_VERLAG',
        preis: 66.6,
        rabatt: 0.066,
        lieferbar: true,
        datum: new Date('2022-02-06'),
        // "Software pioneers",
        issn: '9783540430810',
        homepage: 'https://acme.it/',
        schlagwoerter: [],
        erzeugt: new Date('2022-02-06'),
        aktualisiert: new Date('2022-02-06'),
    },
];

export const schlagwoerter: Schlagwort[] = [
    {
        id: '00000000-0000-0000-0000-010000000001',
        magazin: magazine[0],
        schlagwort: 'JAVASCRIPT',
    },
    {
        id: '00000000-0000-0000-0000-020000000001',
        magazin: magazine[1],
        schlagwort: 'TYPESCRIPT',
    },
    {
        id: '00000000-0000-0000-0000-030000000001',
        magazin: magazine[2],
        schlagwort: 'JAVASCRIPT',
    },
    {
        id: '00000000-0000-0000-0000-030000000002',
        magazin: magazine[2],
        schlagwort: 'TYPESCRIPT',
    },
    {
        id: '00000000-0000-0000-0000-500000000001',
        magazin: magazine[4],
        schlagwort: 'TYPESCRIPT',
    },
    {
        id: '00000000-0000-0000-0000-600000000001',
        magazin: magazine[5],
        schlagwort: 'TYPESCRIPT',
    },
];

magazine[0]!.schlagwoerter.push(schlagwoerter[0]!);
magazine[1]!.schlagwoerter.push(schlagwoerter[1]!);
magazine[2]!.schlagwoerter.push(schlagwoerter[2]!, schlagwoerter[3]!);
magazine[4]!.schlagwoerter.push(schlagwoerter[4]!);
magazine[5]!.schlagwoerter.push(schlagwoerter[5]!);

/* eslint-enable @typescript-eslint/no-non-null-assertion */
