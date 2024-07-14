enum Role {
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

interface Billable {
    total: number,
    currentBill(): string,
}

const medico = {
    name: 'Martin',
    email: 'mar@test.com',
    role: Role.Doctor,
    total: 35,
    currentBill() {
        return `Factura actual en ${this.total}`;
    }
}

type PrintStaffFn = (staff: Staff) => void;
const printStaff : PrintStaffFn = (staff: Staff) => {
    console.log(staff);
}

printStaff(medico);

const printCurrentBill = (bill: Billable) => {
    console.log(bill.currentBill());
}

printCurrentBill(medico);