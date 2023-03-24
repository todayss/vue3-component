import { Plugin } from "vue";

export type SFCPlugin<T> = Plugin & T;

const withInstall = <T>(com: T) => {
  (com as SFCPlugin<T>).install = (app) => {
    const { name } = com as unknown as { name: string }
    app.component(name, com as SFCPlugin<T>)
  }
  return com as SFCPlugin<T> 
}

export default withInstall