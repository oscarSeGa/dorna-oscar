import fs from 'fs';
import path from "path";
import {Simulation} from "./domain/models/Simulation";

const rawData = fs.readFileSync(path.join(__dirname, "data/simfile.json"),'utf8');
const simFile: Simulation = JSON.parse(rawData);
