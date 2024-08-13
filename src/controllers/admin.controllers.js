import mongoose from "mongoose";
import { Admin } from "../models/admin.models";

// add students
export const addStudents = async = (req, res) => {
    const { studentData } = req.body;
    const { process } = req.query;

    if (process === 'batch') {
        try {

        } catch (error) {

        }
    }

    if (process === 'single') {
        try {

        } catch (error) {

        }
    }

}