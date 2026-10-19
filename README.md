# Augur

Pronóstico del tiempo que compara tres modelos globales, ECMWF, GFS e ICON, y muestra cuándo coinciden y cuándo no.

**App:** https://luisleytonjohns.github.io/augur.meteo.app/

## Qué hace

- Pronóstico actual, de las próximas 24 horas y de siete días, como consenso de los tres modelos.
- Nivel de acuerdo entre modelos para cada día.
- Riesgos de tormenta eléctrica, lluvia intensa, viento fuerte, helada y calor extremo, calculados con los escenarios del ensemble de ECMWF y GFS.
- Resumen en lenguaje natural, con lectura en voz alta.
- Radar de lluvia de las últimas dos horas.

Los riesgos son estimaciones de modelos y no reemplazan las alertas oficiales de la Dirección Meteorológica de Chile ni de SENAPRED.

## Cómo está hecho

- **Interfaz:** este repositorio, publicado con GitHub Pages.
- **Servidor de datos:** Google Apps Script, que consulta Open-Meteo cada hora, calcula el consenso y los riesgos, guarda el registro diario y envía los correos.

## Datos

Open-Meteo (ECMWF IFS, GFS, ICON y sus ensembles) · radar RainViewer · mapas © OpenStreetMap y © CARTO.

## Autor

Desarrollado por **Luis Leyton-Johns**
ORCID [0000-0002-4462-403X](https://orcid.org/0000-0002-4462-403X) · [linkedin.com/in/luis-leyton-johns](https://www.linkedin.com/in/luis-leyton-johns)
