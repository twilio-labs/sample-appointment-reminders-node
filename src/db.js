/**
 * This file contains a sample database interface inspired by Mongoose for
 * MongoDB. Instead of using an actual database it will use a JSON file in
 * _data/db.json to store the data.
 *
 * For a production environment you should swap this with your own database.
 */
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('_data/db.json', {
  defaultValue: {
    appointments: [],
  },
});

let db;

/**
 * Returns a cached database instance of lowdb
 * @return {Promise<*>} database instance
 */
async function getDb() {
  if (db) {
    return db;
  }

  db = await low(adapter);
  return db;
}

/**
 * Generate a random ID that can be used to store database entries
 * @return {string} random string
 */
function getRandomId() {
  return Math.random()
    .toString(36)
    .substr(2);
}

/**
 * Class representing an Appointment entity. It's responsible to interact with
 * the database
 */
class Appointment {
  /**
   * Creates an instance of Appointment.
   * @param {*} data
   * @memberof Appointment
   */
  constructor(data) {
    if (!data._id) {
      data._id = getRandomId();
    }
    this._id = data._id;
    this.name = data.name;
    this.phoneNumber = data.phoneNumber;
    this.notification = data.notification;
    this.timeZone = data.timeZone;
    this.time = data.time;
  }

  /**
   * Turns the properties of this class instance into a plain JSON
   * @return {*} JSON object with all appointment properties
   */
  toJson() {
    return {
      _id: this._id,
      name: this.name,
      phoneNumber: this.phoneNumber,
      notification: this.notification,
      timeZone: this.timeZone,
      time: this.time,
    };
  }

  /**
   * Aliasing _id to id
   *
   * @readonly
   * @return {string} ID string
   * @memberof Appointment
   */
  get id() {
    return this._id;
  }

  /**
   * Saves an entry to the database or updates it if necessary
   *
   * @return {Promise<Appointment>} the current instance of this class
   * @memberof Appointment
   */
  async save() {
    const db = await getDb();

    const entry = db.get(Appointment.dbKey).find({ _id: this._id });
    if (!entry.value()) {
      await db
        .get(Appointment.dbKey)
        .push(this.toJson())
        .write();
      return this;
    }

    await entry.assign(this.toJson()).write();
    return this;
  }

  /**
   * Returns all appointments stored in the database
   *
   * @static
   * @return {Promise<Appointment[]>} Appointment instances
   * @memberof Appointment
   */
  static async find() {
    const db = await getDb();

    return db
      .get(Appointment.dbKey)
      .value()
      .map(entry => new Appointment(entry));
  }

  /**
   * Searches the database and returns the first instance that matches the passed
   * properties
   *
   * @static
   * @param {*} searchCondition an object of properties to look for
   * @return {Promise<Appointment>} the instance of first match
   * @memberof Appointment
   */
  static async findOne(searchCondition) {
    const db = await getDb();

    const firstEntry = db
      .get(Appointment.dbKey)
      .find(searchCondition)
      .value();

    if (!firstEntry) {
      return null;
    }
    return new Appointment(firstEntry);
  }

  /**
   * Removes the first instance that matches the search parameters
   *
   * @static
   * @param {*} searchCondition an object of properties to look for
   * @return {Promise<undefined>}
   * @memberof Appointment
   */
  static async remove(searchCondition) {
    const db = await getDb();
    await db
      .get(Appointment.dbKey)
      .remove(searchCondition)
      .write();

    return undefined;
  }
}

Appointment.dbKey = 'appointments';

module.exports = { Appointment };
