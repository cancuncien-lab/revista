# Revista Paquetes · Cancun100

Sitio estático desplegado en Vercel. Cada paquete es una carpeta con su propio `index.html` e imágenes.

```
index.html        portada con las tarjetas de todos los paquetes
paquetes.js       lista de paquetes + barra de pestañas compartida
primera-vez/      Paquete 1 · Nunca he ido a Cancún
xcaret/           Paquete 2 · Xcaret sin romper el cochinito
```

## Agregar un paquete

1. Crear la carpeta `<slug>/` con su `index.html` y una subcarpeta `img/`.
2. En el `<head>` del HTML agregar `<script src="/paquetes.js" defer></script>`.
3. Agregar la entrada en `window.PAQUETES` dentro de `paquetes.js`.
4. Hacer push. Vercel publica solo.
