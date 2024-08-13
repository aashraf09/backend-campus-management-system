import { Router } from "express";

const router = Router()


// POST ROUTES
router.route('/add-students').post()
router.route('/add-staff').post()
router.route('/create-invoice').post()
router.route('/create-result-sheets').post()
router.route('/create-cetificate').post()

// GET ROUTES
router.route('/get-all-students').get()
router.route('/get-all-staff').get()
router.route('/get-all-invoices').get()
router.route('/get-all-results').get()
router.route('/get-all-certificates').get()

// PATCH ROUTES
router.route('/edit-student-info').patch()
router.route('/edit-staff-info').patch()

// DELETE ROUTES
router.route('/delete-student').delete()
router.route('/delete-staff-member').delete()


export default router