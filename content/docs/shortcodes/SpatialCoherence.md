# Spatial Coherence

El siguiente shader utiliza la coherencia espacial para reducir la resolución en un área específica en un único texel.

La coherencia espacial se refiere a la relación y continuidad de los píxeles adyacentes en una imagen. Es una propiedad que se puede aprovechar en gráficos por computadora para realizar técnicas como el muestreo y la reducción de resolución de manera eficiente.

En este caso, el shader utiliza la coherencia espacial para aplicar downsampling (reducción de resolución) en un área de baja resolución. Esto significa que, en lugar de muestrear cada píxel individualmente, se agrupa la información en un solo texel para representar el área.

El shader logra esto mediante el análisis de la relación y similitud de los píxeles vecinos en el área de baja resolución. Al detectar la coherencia espacial entre ellos, el shader decide que esos píxeles pueden ser representados por un único valor, que se asigna a un texel en la textura de salida de baja resolución.

El resultado es una reducción significativa en la cantidad de píxeles que se necesitan procesar y almacenar para representar el área de baja resolución, lo que a su vez reduce la carga computacional y el consumo de memoria.

El uso de la coherencia espacial en técnicas de downsampling es especialmente útil en casos donde la información visual en el área de baja resolución no requiere una representación detallada, como fondos lejanos o texturas poco visibles. Al utilizar un solo texel para representar esta información, se logra un ahorro considerable en recursos sin comprometer la calidad visual general.

En resumen, el shader mencionado utiliza la coherencia espacial para realizar downsampling en un área de baja resolución. Aprovechando la relación y similitud de los píxeles adyacentes, se agrupa la información en un único texel para representar eficientemente el área. Esto permite ahorrar recursos computacionales y de memoria sin perder la calidad visual necesaria en casos donde la información en la zona de baja resolución no requiere una representación detallada.

{{< hint info >}}
**Override Mermaid Initialization Config**

To override the [initialization config](https://mermaid-js.github.io/mermaid/#/Setup) for Mermaid,
create a `mermaid.json` file in your `assets` folder!
{{< /hint >}}

## Example

{{< columns >}}
{{< highlight tpl1 >}}
{{</* mermaid [class="text-center"]*/>}}
stateDiagram-v2
    State1: The state with a note
    note right of State1
        Important information! You can write
        notes.
    end note
    State1 --> State2
    note left of State2 : This is the note to the left.
{{</* /mermaid */>}}
{{< /highlight >}}

<--->

{{< mermaid >}}
stateDiagram-v2
    State1: The state with a note
    note right of State1
        Important information! You can write
        notes.
    end note
    State1 --> State2
    note left of State2 : This is the note to the left.
{{< /mermaid >}}

{{< /columns >}}
