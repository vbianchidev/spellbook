export namespace Layout {
  export class ToogleSidenav {
    static readonly type = '[LAYOUT] Toogle Sidenav';
  }

  export class SetSidenav {
    constructor(public opened: boolean) {}
    static readonly type = '[LAYOUT] Set Sidenav';
  }
}
