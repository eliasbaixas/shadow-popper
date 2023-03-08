import { createPopper } from "@popperjs/core";
import { LitElement, html, css } from "lit-element";

class ToolTipWithArrow extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: blue;
        width: 300px;
      }

      #tip {
        position: absolute;
        background-color: red;
        width: 10px;
        height: 10px;
      }
    `;
  }

  get tipElement() {
    return this.shadowRoot.querySelector("#tip");
  }

  render() {
    return html`
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas
        sed enim sed condimentum. Nunc facilisis scelerisque massa sed luctus.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Suspendisse sagittis sodales purus vitae ultricies.
        Integer at dui sem. Sed quam tortor, ornare in nisi et, rhoncus lacinia
        mauris. Sed vel rutrum mauris, ac pellentesque nibh. Sed feugiat semper
        libero, sit amet vehicula orci fermentum id. Vivamus imperdiet egestas
        luctus. Mauris tincidunt malesuada ante, faucibus viverra nunc blandit
        a. Fusce et nisl nisi. Aenean dictum quam id mollis faucibus. Nulla a
        ultricies dui. In hac habitasse platea dictumst. Curabitur gravida
        lobortis vestibulum.
      </div>
      <div id="tip"></div>
    `;
  }
}

if (!customElements.get("tooltip-with-arrow")) {
  customElements.define("tooltip-with-arrow", ToolTipWithArrow);
}

const button = document.createElement("button");
button.textContent = "I'm a button";
const tooltip = document.createElement("tooltip-with-arrow");
document.body.appendChild(button);
document.body.appendChild(tooltip);

customElements.upgrade(document.body);

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
createPopper(button, tooltip, {
  placement: "right",
  modifiers: [
    {
      name: "arrow",
      options: {
        element: tooltip.tipElement
      }
    }
  ]
});
