export class MonthModel {
    constructor (
        public no: string,
        public mon: string
    ) {}
}

export class RequestbyModel {
    constructor (
        public id: string,
        public requestName: string
    ) {}
}

export class BuzAreaModel {
    constructor (
        public buzareano: string,
        public buzarea: string
    ) {}
}

export class CostCenterModel {
    constructor (
        public costCtr: string,
        public costCtrName: string
    ) {}
}

export class InvestmentModel {
    constructor (
        public invNo: number,
        public invName: string
    ) {}
}

export class PlantModel {
    constructor (
        public plantNo: string,
        public plantName: string
    ) {}
}

export class GLCostModel {
    constructor (
        public gl: string
    ) {}
}

export class CurrenciesModel {
    constructor(
        public curr: string
    ) {}
}

export class UnitsModel {
    constructor (
        public unit: string
    ) {}
}

export class SuppliersModel {
    constructor (
        public sp: string
    ) {}
}

export class CostCenter {
    constructor(
        public costcenter: string
    ) {}
}

export class PrinputdataModel {
    constructor(
        public prtype: string,
        public prplant: string,
        public prbuzarea: string,
        public prprofitarea: string,
        public prrequestby: string,
        public prnumber: string,
        public prdate: string,
        public prdlvdate: string,
        public prinvnumber: string,
        public prsuppliername: string,
        public pritemdesc: string,
        public prqty: number,
        public prunit: string,
        public prunitprice: number,
        public prtotalprice: number,
        public prcurrency: string,
        public prremark: string
    ) {}
}
