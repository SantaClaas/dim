import { LitElement, css, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { consume } from '@lit-labs/context';
import { dimNavigationHostContext } from './DimNavigationHostContext.js';
import { DimNavigation } from './DimNavigation.js';

export class DimNavigationItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;

      width: 100%;
      height: 56px;
      box-sizing: border-box;
    }

    /* Medium */
    @media (min-width: 600px) and (max-width: 840px) {
      :host {
        /* Rail width */
        width: 70px;
      }
    }

    /* Expanded */
    @media (min-width: 840px) and (max-width: 1240px) {
      :host {
        width: 70px;
      }
    }

    /* "Expandeder" */
    @media (min-width: 1240px) {
      :host {
        width: 336px;
      }
    }

    li a {
      all: unset;

      font-family: var(--md-sys-typescale-label-medium-font-family-name);
      line-height: var(--md-sys-typescale-label-medium-line-height);
      font-size: var(--md-sys-typescale-label-medium-font-size);
      font-style: var(--md-sys-typescale-label-medium-font-family-style);
      letter-spacing: var(--md-sys-typescale-label-medium-letter-spacing);
      font-weight: var(--md-sys-typescale-label-medium-font-weight);

      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 0 16px 0;

      height: 100%;

      cursor: pointer;

      box-sizing: border-box;

      align-items: center;

      @media (min-width: 600px) {
        padding: 0;
        height: 56px;
      }

      @container (min-width: 336px) {
        flex-direction: row;
        gap: 12px;

        padding: 16px 24px 16px 16px;

        font-family: var(--md-sys-typescale-label-large-font-family-name);
        line-height: var(--md-sys-typescale-label-large-line-height);
        font-size: var(--md-sys-typescale-label-large-font-size);
        font-style: var(--md-sys-typescale-label-large-font-family-style);
        letter-spacing: var(--md-sys-typescale-label-large-letter-spacing);
        font-weight: var(--md-sys-typescale-label-large-font-weight);

        border-radius: var(--md-sys-shape-corner-extra-large);

        /* Label */
        & span:first-of-type {
          flex: 1 0 0;
        }

        /* States inactive */
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-surface)
              var(--md-sys-state-hover-state-layer-opacity),
            var(--_background-color)
          );

          color: var(--md-sys-color-on-surface);
        }

        &:focus {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-surface)
              var(--md-sys-state-focus-state-layer-opacity),
            var(--_background-color)
          );
          color: var(--md-sys-color-on-surface);
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-secondary-container)
              var(--md-sys-state-pressed-state-layer-opacity),
            var(--_background-color)
          );
          color: var(--md-sys-color-on-surface);
        }

        /* States active destination */
        &[active] {
          /* Active indicator is the link in our case so we change its background color */
          --_background-color: var(--md-sys-color-secondary-container);
          --_color: var(--md-sys-color-on-secondary-container);
          background-color: var(--_background-color);
          color: var(--_color);

          /* Active hover */
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-secondary-container)
                var(--md-sys-state-hover-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-secondary-container);
          }

          &:focus {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-secondary-container)
                var(--md-sys-state-focus-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-secondary-container);
          }

          &:active {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-secondary-container)
                var(--md-sys-state-focus-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-secondary-container);
          }

          /* Use filled icon when active */
          & slot[name='icon-outlined'] {
            display: none;
          }
        }
      }

      & slot[name^='icon-'] {
        display: grid;
        justify-content: center;
        align-content: center;
        width: 64;
        height: 32px;
        padding: 4px 20px;
        box-sizing: border-box;

        border-radius: var(--md-sys-shape-corner-large);

        /* On the rail only the the area around the icon has a different color */
        --_background-color: var(--md-sys-color-surface);
        background-color: var(--_background-color);
        /* Text & icon color */
        --_color: var(--md-sys-color-on-surface-variant);
        color: var(--_color);

        @media (min-width: 600px) {
          padding: 4px 16px;
        }

        /* Inactive hover */
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-surface-variant)
              var(--md-sys-state-hover-state-layer-opacity),
            var(--_background-color)
          );

          color: var(--md-sys-color-on-surface-variant);
        }

        &:focus {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-surface-variant)
              var(--md-sys-state-focus-state-layer-opacity),
            var(--_background-color)
          );

          color: var(--md-sys-color-on-surface-variant);
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--md-sys-color-on-surface-variant)
              var(--md-sys-state-pressed-state-layer-opacity),
            var(--_background-color)
          );
          color: var(--md-sys-color-on-surface-variant);
        }

        @container (min-width: 336px) {
          display: contents;
        }
      }

      /* Use outlined icon when inactive */
      &:not([active]) slot[name='icon-filled'] {
        display: none;
      }

      /* Icon size is always 24px */
      & slot[name^='icon-']::slotted(*) {
        height: 24px;
        width: 24px;
      }

      /* Hide badge for now */
      & span:nth-of-type(2) {
        display: none;

        @container (min-width: 336px) {
          display: initial;
        }
      }

      /* States active destination */
      &[active] {
        /* Active indicator is the link in our case so we change its background color */
        & slot[name^='icon-'] {
          --_background-color: var(--md-sys-color-secondary-container);
          --_color: var(--md-sys-color-on-surface);

          &::slotted(*) {
            /* Icon color is different to label text color on active */
            color: var(--md-sys-color-on-secondary-container);
          }

          /* Active hover */
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-surface)
                var(--md-sys-state-hover-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-surface);

            &::slotted(*) {
              color: var(--md-sys-color-on-secondary-container);
            }
          }

          &:focus {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-secondary-container)
                var(--md-sys-state-focus-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-secondary-container);

            &::slotted(*) {
              color: var(--md-sys-color-on-secondary-container);
            }
          }

          &:active {
            background-color: color-mix(
              in srgb,
              var(--md-sys-color-on-secondary-container)
                var(--md-sys-state-focus-state-layer-opacity),
              var(--_background-color)
            );

            color: var(--md-sys-on-secondary-container);

            &::slotted(*) {
              color: var(--md-sys-color-on-secondary-container);
            }
          }
        }

        /* Use filled icon when active */
        & slot[name='icon-outlined'] {
          display: none;
        }
      }
    }
  `;

  #hrefAttribute: string = '';

  #hrefAbsolute: string = '';

  set href(value: string) {
    const oldValue = this.#hrefAttribute;

    this.#hrefAttribute = value;
    this.#hrefAbsolute = new URL(value, document.baseURI).href;

    this.requestUpdate('href', oldValue);
  }

  @property()
  get href() {
    // This approach allows us to mirror the behavior of the anchor tag which converts relative href to absolute
    return this.#hrefAbsolute;
  }

  /** @internal */
  @property({ type: Boolean })
  isActive: boolean = false;

  @property({ type: String })
  label = '';

  @property({ type: String })
  badge?: string;

  @consume({ context: dimNavigationHostContext })
  private navigationHost?: DimNavigation;

  connectedCallback(): void {
    super.connectedCallback();

    /**
     * Known cases when this can happen:
     * - Users place navigation item outside of navigatio host like navigation drawer
     * - This navigatiom items "firstUpdate" was called before the context was initialized, this should not happen but
     *   can't be guaranteed at development time
     *
     * In any of these cases erroring would be bad as web component should work by default. A warning in dev mode could
     * be considered as appropriate
     */
    if (!this.navigationHost) return;

    // Can not run on connected callback as we need the anchor to be rendered to get the full path href
    this.navigationHost.register(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    // See notes in connectedCallback above
    if (!this.navigationHost) return;

    this.navigationHost.unregister(this);
  }

  protected render() {
    return html`
      <li>
        <a href=${this.#hrefAttribute} ?active=${this.isActive}>
          <slot name="icon-outlined"></slot>
          <slot name="icon-filled"></slot>
          <span>${this.label}</span>
          ${this.badge ? html`<span>${this.badge}</span>` : nothing}
        </a>
      </li>
    `;
  }
}
