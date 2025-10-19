import dotenv from "dotenv";
dotenv.config()

import connectDb from "../config/database.js";
import Restaurant from "../models/restaurantModel.js";
import { restaurants } from "../Restaurants.js";

async function run() {
    await connectDb();
    let inserted = 0, updated = 0;
    for (const r of restaurants) {

    if (!r.image) {
        r.image = "https://via.placeholder.com/600x400?text=Restaurant";
    }

    if (Array.isArray(r.locations)) {
        r.locations = r.locations.map(loc => {
            if (loc.adress && !loc.address) {
                loc.address = loc.adress;
                delete loc.adress;
            }
            return loc;
        });
    }

    const res = await Restaurant.updateOne(
        { id: r.id },
        { $set: r },
        { upsert: true }
    );

    if (res.upsertedCount) inserted += 1;
    else if (res.modifiedCount) updated += 1;
}
    console.log(`Seed done. Inserted: ${inserted}, Updated: ${updated}`);
    process.exit(0);
}
run().catch(err => {
    console.error("Seed failed:", err);
        process.exit(1);
    });
