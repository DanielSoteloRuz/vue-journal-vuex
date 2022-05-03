/* 
  EXPLICACION:
  Es reactivo y cuando se cambia el state vamos a notificar a todos los componentes o a varios lugares donde esten escuchando los cambios de nuestro state
 */

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Amet fugiat ullamco dolore aute dolore exercitation incididunt in enim fugiat. Velit fugiat irure adipisicing culpa aute velit sint pariatur nisi eu anim. Reprehenderit consectetur dolor voluptate sint commodo est incididunt qui laborum ipsum esse pariatur esse id. Amet id pariatur consectetur mollit deserunt sint sunt mollit voluptate pariatur minim cillum labore duis. Ut commodo sunt ea aute esse adipisicing. Ad in aute eiusmod velit enim officia officia nostrud.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem sunt incididunt adipisicing fugiat commodo dolore velit ea sunt officia esse irure sunt minim. Magna consequat in proident officia laboris sunt est aliqua aute mollit excepteur sit cupidatat. Lorem ullamco reprehenderit est tempor. Sit qui reprehenderit in id non nisi tempor.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Irure aliquip tempor nulla nostrud dolore laborum nisi pariatur. Veniam reprehenderit veniam cillum magna non. Est in reprehenderit dolor amet occaecat magna laboris mollit magna minim ad. Fugiat do velit sunt pariatur. Do sint officia anim aute cillum consequat ad consequat nulla adipisicing reprehenderit enim officia ad.',
      picture: null,
    }
  ]
})