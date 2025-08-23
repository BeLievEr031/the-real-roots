import clsx from "clsx"
import { Plus } from "lucide-react"
import { useState } from "react"

function Countries() {
    const Activecountries = [
        {
            "country": "USA",
            "city": "Alabama"
        },
        {
            "country": "USA",
            "city": "Alaska"
        },
        {
            "country": "USA",
            "city": "Arizona"
        },
        {
            "country": "USA",
            "city": "Arkansas"
        },
        {
            "country": "USA",
            "city": "California"
        },
        {
            "country": "USA",
            "city": "Colorado"
        },
        {
            "country": "USA",
            "city": "District of Columbia"
        },
        {
            "country": "USA",
            "city": "Florida"
        },
        {
            "country": "USA",
            "city": "Georgia"
        },
        {
            "country": "USA",
            "city": "Hawaii"
        },
        {
            "country": "USA",
            "city": "Idaho"
        },
        {
            "country": "USA",
            "city": "Illinois"
        },
        {
            "country": "USA",
            "city": "Indiana"
        },
        {
            "country": "USA",
            "city": "Iowa"
        },
        {
            "country": "USA",
            "city": "Kansas"
        },
        {
            "country": "USA",
            "city": "Kentucky"
        },
        {
            "country": "USA",
            "city": "Louisiana"
        },
        {
            "country": "USA",
            "city": "Maryland"
        },
        {
            "country": "USA",
            "city": "Massachusetts"
        },
        {
            "country": "USA",
            "city": "Michigan"
        },
        {
            "country": "USA",
            "city": "Minnesota"
        },
        {
            "country": "USA",
            "city": "Missouri"
        },
        {
            "country": "USA",
            "city": "Montana"
        },
        {
            "country": "USA",
            "city": "Nebraska"
        },
        {
            "country": "USA",
            "city": "Nevada"
        },
        {
            "country": "USA",
            "city": "New Jersey"
        },
        {
            "country": "USA",
            "city": "New Mexico"
        },
        {
            "country": "USA",
            "city": "New York"
        },
        {
            "country": "USA",
            "city": "North Carolina"
        },
        {
            "country": "USA",
            "city": "Ohio"
        },
        {
            "country": "USA",
            "city": "Oklahoma"
        },
        {
            "country": "USA",
            "city": "Oregon"
        },
        {
            "country": "USA",
            "city": "Pennsylvania"
        },
        {
            "country": "USA",
            "city": "Rhode Island"
        },
        {
            "country": "USA",
            "city": "South Carolina"
        },
        {
            "country": "USA",
            "city": "South Dakota"
        },
        {
            "country": "USA",
            "city": "Tennessee"
        },
        {
            "country": "USA",
            "city": "Texas"
        },
        {
            "country": "USA",
            "city": "United Kingdom"
        },
        {
            "country": "USA",
            "city": "Utah"
        },
        {
            "country": "USA",
            "city": "Virginia"
        },
        {
            "country": "USA",
            "city": "Washington"
        },
        {
            "country": "USA",
            "city": "Wisconsin"
        },
        {
            "country": "USA",
            "city": "Wyoming"
        }
    ]

    const [countriesDetail, setCountries] = useState({
        country: "USA",
        countries: Activecountries
    })
    const handleCountryChange = (country: string) => {
        if (country === "USA") {
            setCountries({
                country: "USA",
                countries: Activecountries
            })
        } else if (country === "CA") {
            setCountries({
                country: "CA",
                countries: [
                    { "city": "Calgary", country: "CA" },
                    { country: "CA", "city": "Edmonton" },
                    { country: "CA", "city": "Hamilton" },
                    { country: "CA", "city": "Ottawa" },
                    { country: "CA", "city": "Toronto" },
                    { country: "CA", "city": "Vancouver" },
                    { country: "CA", "city": "Winnipeg" }
                ]
            })
        } else {
            setCountries({
                country: "AU",
                countries: [
                    { country: "AUS", "city": "melbourne" },
                    { country: "AUS", "city": "perth" },
                    { country: "AUS", "city": "sydney" }
                ]
            })
        }
    }
    return (
        <div className='bg-white px-4 md:px-16 py-10 md:py-20'>
            <h2 className="uppercase font-semibold">Made for women of all ages (21+)</h2>
            <div className="text-[44px] text-text-primery">
                <h1 className="">Join a
                    <i className="font-playfair mx-3">series</i>
                </h1>
                <h1 className="-translate-y-[25%]">
                    in your
                    <i className="font-playfair mx-3">city.</i>
                </h1>
            </div>

            <div className="md:space-x-3 md:block flex flex-wrap gap-2">
                <button className={
                    clsx('border border-pink-300 rounded-full px-8 py-2 cursor-pointer', {
                        "bg-pink-50": countriesDetail.country === "USA"
                    })
                }
                    onClick={() => handleCountryChange("USA")}>
                    <span className="mx-1 text-xs">US</span>
                    <span>United state</span>
                </button>
                <button className={
                    clsx('border border-pink-300 rounded-full px-8 py-2 cursor-pointer', {
                        "bg-pink-50": countriesDetail.country === "CA"
                    })}
                    onClick={() => handleCountryChange("CA")}
                >
                    <span className="mx-1 text-xs">CA</span>
                    <span>Canada</span>
                </button>
                <button className={
                    clsx('border border-pink-300 rounded-full px-8 py-2 cursor-pointer', {
                        "bg-pink-50": countriesDetail.country === "AU"
                    })}
                    onClick={() => handleCountryChange("AU")}
                >
                    <span className="mx-1 text-xs">AU</span>
                    <span>Australia</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-x-7 gap-y-4">
                {
                    countriesDetail.countries.map((item) => {
                        return <div className="flex justify-between bg-pink-50 px-5 py-3 md:py-6 border border-pink-200 rounded-xl text-xl text-text-primery">
                            {item.city}
                            <Plus />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Countries