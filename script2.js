class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = {};
    }

    // creacion de la cuenta
    crearcuenta(codigo, saldo = 0) {
        if (this.cuentas[codigo]) {
            console.error(`la cuenta ${codigo} ya existe`);
            return;
        }

        if (codigo < 1 || codigo > 599999) {
            console.error("el codigo debe estar entre 000001 y 599999");
            return;
        }

        this.cuentas[codigo] = saldo;
    }

    // actualizacion de cuenta
    actualizarcuenta(codigo, cantidad) {
        if (!this.cuentas[codigo]) {
            console.error(`la cuenta ${codigo} no existe`);
            return;
        }
        this.cuentas[codigo] += cantidad;
    }

    // eliminacion de la cuenta
    eliminarcuenta(codigo) {
        if (!this.cuentas[codigo]) {
            console.error(`la cuenta ${codigo} no existe`);
            return;
        }

        if (this.cuentas[codigo] !== 0) {
            console.error(`la cuenta ${codigo} no puede eliminarse porque el saldo es distinto de 0`);
            return;
        }

        delete this.cuentas[codigo];
    }

    // listado de cuentas
    listarcuentas() {
        document.write(`<h1>${this.nombre}</h1>`);
        document.write("<hr>");

        for (let codigo in this.cuentas) {
            document.write(`<p><strong>${codigo}</strong> - ${this.cuentas[codigo]} €</p>`);
        }
    }
}

// comprobaciones
let banco = new Banco("Banco de Jose Ignacio");

banco.crearcuenta("11111", 55);
banco.crearcuenta("22222");
banco.crearcuenta("33333", 66);

banco.actualizarcuenta("22222", 20);
banco.actualizarcuenta("33333", -10);

banco.eliminarcuenta("11111");

banco.actualizarcuenta("22222", -20);
banco.eliminarcuenta("22222");

banco.listarcuentas();