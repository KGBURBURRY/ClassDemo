import { useState, useRef } from "react"
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccountNumber, setBankAccountNumber] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNote] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">

        {showInvoice ?
          <>
            <ReactToPrint trigger={() => <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-5">Print / Download</button>} content={() => componentRef.current} />

            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />
              {/* Invoice Generator Details Section */}
              <MainDetails name={name} address={address} />

              {/* Client Details */}
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />

              {/* Dates */}
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

              {/* Table */}
              <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} />
              {/* Notes */}
              <Notes notes={notes} />

              {/* Footer */}
              <Footer name={name} email={email} phone={phone} bankName={bankName} bankAccountNumber={bankAccountNumber} website={website} />

            </div>
            <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-5">Edit Information</button>
          </> : (
            <>
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name">Enter your name</label>
                    <input type="text" name="text" id="name" placeholder="Enter your Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="address">Enter your address</label>
                    <input type="text" name="text" id="address" placeholder="Enter your Address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Enter your email ID</label>
                    <input type="text" name="text" id="email" placeholder="Enter your Email ID" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="website">Enter your Website</label>
                    <input type="url" name="text" id="website" placeholder="Enter your Website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Enter your Phone Number</label>
                    <input type="text" name="text" id="phone" placeholder="Enter your Phone Number" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Enter your Bank name</label>
                    <input type="text" name="text" id="bankName" placeholder="Enter your Bank Name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="bankAccountNumber">Enter your Bank Account Number</label>
                    <input type="text" name="text" id="bankAccountNumber" placeholder="Enter your Bank Account Number" autoComplete="off" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Enter your Client Name</label>
                    <input type="text" name="text" id="clientName" placeholder="Enter the Client Name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">Enter the Client's Address</label>
                    <input type="text" name="text" id="clientAddress" placeholder="Enter the Client's Address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber">Enter the Invoice Number</label>
                    <input type="text" name="text" id="invoiceNumber" placeholder="Enter the Invoice Number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Enter the Invoice Date</label>
                    <input type="date" name="text" id="invoiceDate" placeholder="Enter the Invoice Date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Enter the Due Date</label>
                    <input type="date" name="text" id="dueDate" placeholder="Enter the Due Date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                  </div>
                </article>

                <article>
                  <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} total={total} setTotal={setTotal} />
                </article>

                <label htmlFor="notes">Enter any specific Notes (optional)</label>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter any specific Notes" autoComplete="off" value={notes} onChange={(e) => setNote(e.target.value)}></textarea>

                <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
              </div>
            </>
          )}
      </main>
    </>
  );
}

export default App;