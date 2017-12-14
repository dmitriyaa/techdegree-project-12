<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dmitriysworkshop');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '43(e.d1k5VBAw rGqb/l8|?,9ONXxQ p]D9s[>Az2@j7+n0NH2C?#`@gJYWO2sBC');
define('SECURE_AUTH_KEY',  'sHp>1G%dhQEi`;T2LZ2,cQj9rIrxW;2+qs=<yjTp0E57 hnvQVn{@[L}qa%;p8mo');
define('LOGGED_IN_KEY',    'vjfo]29R{j?pTqEkKzk)qMiYv`~nG~d{Ps$,/(`4$kiV/G:9V33:}oJn[p l~h-@');
define('NONCE_KEY',        '~dKq[+>cSo5GMAW+&,K;Ch{}uH%!E!pLf5FXa[3k[Q@kl68!4aOf`z(G]q61ML5&');
define('AUTH_SALT',        '/x}0clkfU{N!H_YV1vb(^sZYNg<a<WD6qG#OnQ_:dS(!<%z =)490t`]+#<0={%O');
define('SECURE_AUTH_SALT', 'ttqjjo]~)FjJ.B]o9@AeFdOA& um},cN`d<Kuo<Z@Mo.G#YsHT<P}(pe-165Dg03');
define('LOGGED_IN_SALT',   'k(@h#=5g6kNa{lcb@69#=Z>;qBM*a!nD0x*icFbz.ptqGufaZ6p8{!bIJHU7:E::');
define('NONCE_SALT',       '>%xa#Y<|I7OtbO/mMg8*16!m)fjm|yZp:wUAy=?BT1 ^wlr_nw;?&qI!Ck683%X&');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
