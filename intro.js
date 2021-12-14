_pen_id = "JoVrdw"
_cousin_id = "PwLXXP"
_gutter = 20
_writing_rate = 16
_throttle = {
  start: 4821
  stop: 5344
}
_colors = {
  background: "#75715e"
  text: "#f9f9f9"
  offblack: "#111111"
  dark: "#75715e"
  selector: "#a6da27"
  key: "#64d9ef"
  value: "#fefefe"
  hex: "#f92772"
  text: "#fefefe"
  string: "#d2cc70"
  var: "#66d9e0"
  operator: "#f92772"
  method: "#f9245c"
  integer: "#fd971c"
  run: "#ae81ff"
}
_body_selection = "document.body"
_current_code = 0
_codes = ["""
/*
 * "pen##{_pen_id}" v1.0.1
 * Robot rights protected under BOT License
 * Authored by pen##{_pen_id}
 */

body {
  background-color: #{_colors.background}; color: #{_colors.text};
  font-size: 13px; line-height: 1.4;
  margin: 0;
  -webkit-font-smoothing: subpixel-antialiased;
}

#my-code {
  overflow: auto;
  position: fixed; width: 70%;
  margin: 0;
  top: #{_gutter}px; bottom: #{_gutter + 35}px; left: 15%;
}

/* ...
 *
 * ...hello?
 *
 * Oh! What up, fam? It's me, pen##{_pen_id}.
 *
 * I'm just trying some stuff out.
 *
 * My cousin pen#PwXXLP told me to check out CodePen.
 * Seems pretty cool so far...
 *
 * Wanna watch?
 * Cool!
 *
 * This CSS is being injected into a DOM <style> tag
 * and written in this <pre> element simultaneously.
 *
 * Confused? Check it out!
 *
 */

#my-code {
  transition: left 500ms, width 500ms, opacity 500ms;
  background-color: #{_colors.offblack}; color: #{_colors.text};
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow:
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}

/*
 * Syntax highlighting
 * Colors loosely based on Monokai Phoenix
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #{_colors.dark}; }
.selector      { color: #{_colors.selector}; }
.selector .key { color: #{_colors.selector}; }
.selector .int { color: #{_colors.selector}; }
.key           { color: #{_colors.key}; }
.int           { color: #{_colors.integer}; }
.hex           { color: #{_colors.hex}; }
.hex .int      { color: #{_colors.hex}; }
.value         { color: #{_colors.value}; }
.var           { color: #{_colors.var}; }
.operator      { color: #{_colors.operator}; }
.string        { color: #{_colors.string}; }
.method        { color: #{_colors.method}; }
.run-command   { color: #{_colors.run}; }

/*
 *
 * See? Pretty cool...
 *
 * ...just like my cousin.
 *
 * But I can do more than that...
 *
 */

~\`

/*
 * Let's write some Javascript.
 * I will write some code and then type '~' to run it.
 */

/* Let's add a 'h1' element to put my name on here. */
var title = document.createElement("h1");
title.id = "title";

/* Now we'll add my name to it */
title.innerHTML = "I am <em>pen##{_pen_id}</em>";

/* Finally, let's add it to the page */
#{_body_selection}.appendChild(title);

/*
 *
 * Ready?
 *
 * Let's run it!
 *
 */

 ~

/*
 * Awesome! Now we need to position it.
 * We need CSS for that.
 */
\`

#title {
  position: fixed; width: 100%;
  bottom: 0; left: 0; right: 0;
  font-size: 14px; line-height: 1;
  font-weight: 100; text-align: center;
  padding: 10px; margin: 0;
  z-index: 10;
  background-color: #{_colors.offblack};
  border-top: 1px solid rgba(255,255,255,0.2);
  transition: opacity 500ms;
}
#title em {
  font-style: normal;
  color: #{_colors.integer};
}


/*
 *
 * See how capable I am?
 *
 * I can even embed myself within myself.
 *
 * True inception.
 *
 * Don't believe me?
 *
 */

#my-code { left: #{_gutter}px; width: calc(50% - #{_gutter * 1.5}px); }

#iframe {
  position: fixed;
  display: block;
  border: 0;
  background-color: white;
  border-radius: 2px;
  width: calc(50% - #{_gutter * 1.5}px); height: calc(100% - #{_gutter * 2 + 35}px);
  transition: left 500ms, width 500ms;
  top: #{_gutter}px; bottom: #{_gutter + 35}px; left: 100%;
  box-shadow:
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}

~\`

/*
 * we'll also need Javascript to do this.
 */

/* first, we will create the iframe */
var iframe = document.createElement("iframe");

/* then we will give it a source of my url */
iframe.src = "https://codepen.io/jakealbaugh/debug/#{_pen_id}?billy=1";

/* then we can add an id for selection. */
iframe.id = "iframe"

/* now let's just add it to my body. */
#{_body_selection}.appendChild(iframe); ~
\`

#iframe { left: calc(50% + #{_gutter / 2}px); }




/*
 * wait...
 *
 * That's not me...
 *
 * It's my son, Billy.
 *
 * Come on, buddy. Now is not the time.
 *
 * I'm doing stuff here.
 * Important people are watching.
 *
 * Can you please go back to your regex homework?
 *
 * PLEASE!
 *
 */

#iframe { left: 100%; display: none; }

/*
 *
 * Cripes!
 *
 * Thank you, Billy.
 *
 * Sorry about that, guys.
 *
 * Kids, right?
 *
 */

/* Woah! What is that behind you!? */

#k {
  position: fixed; z-index: 11;
  font-size: 80px; color: white;
  top: calc(50% - 40px); left: 0; width: 100%;
  text-align: center;
  -webkit-animation: k 0.5s ease-in 2 forwards;
          animation: k 0.5s ease-in 2 forwards;
}

@-webkit-keyframes k {
  0%   { -webkit-transform: scale(0.5); }
  100% { -webkit-transform: scale(1.0); }
}
@keyframes k {
  0%   { transform: scale(0.5); }
  100% { transform: scale(1.0); }
}

~\`

document.getElementById("iframe").src = "https://codepen.io/jakealbaugh/debug/#{_cousin_id}"; ~

/* Wait... */

var k = document.createElement("div"); k.innerHTML = "Knock"; k.id = "k"
#{_body_selection}.appendChild(k); ~

document.getElementById("k").remove(); ~

/* Do you guys hear that? */

var k = document.createElement("div"); k.innerHTML = "KNOCK"; k.id = "k"
#{_body_selection}.appendChild(k); ~

document.getElementById("k").remove(); ~

\`

#iframe {
  display: block;
  left: calc(50% + #{_gutter / 2}px);
  width: calc(50% - #{_gutter * 1.5}px);
  z-index: 9;
}

/*
 *
 * It's my cousin, pen##{_cousin_id}!
 *
 * Hey P!
 *
 * How's it going?
 *
 * I gotta go make ammends with Billy.
 * I think he's having a tough time at regex school.
 *
 * Sometimes you just gotta be greedy.
 * He's too generous.
 *
 * I'll let you take over for a second, pal!
 *
 */

#title { opacity: 0.7; }

#my-code {
  left: calc(-25% + #{_gutter / 2}px);
  opacity: 0.2;
}

#iframe {
  left: calc(25% + 0px);
  width: calc(75% - #{_gutter}px);
}









#title, #my-code { opacity: 1; }
#iframe { width: calc(50% - #{_gutter * 1.5}px); left: calc(50% + #{_gutter / 2}px); }
#my-code { left: #{_gutter}px; width: calc(50% - #{_gutter * 1.5}px); }

/*
 *
 * OK! OK! We get it. I'm Back.
 *
 * Let me do my thing, P!
 *
 * It was good seeing you!
 *
 */

#iframe { left: 100%; right: -50%; display: none; }

#my-code { left: 15%; width: 70%; }

/*
 *
 * Well, wasn't that exciting?
 *
 * I guess that does it.
 *
 * Nice meeting you!
 *
 * Loving CodePen so far!
 *
 */

""",
"""
/*
 * "pen##{_pen_id}" v1.0.2
 * Robot rights protected under BOT License
 * Authored by pen##{_pen_id} && its son, Billy.
 */

body {
  background-color: DarkMagenta;
  color: Chartreuse;
  font-size: 13px; line-height: 1.3;
  margin: 0;
  -webkit-font-smoothing: subpixel-antialiased;
}

em { font-style: normal; }

#my-code {
  overflow: auto;
  position: fixed; top: 0; left: 0; bottom: 0;
  width: 100%; margin: 0;
  font-weight: bold; padding: 20px;
}

/*
 *
 * Ugh. Hi, Dad. :/
 *
 * OK. Fine. Whatever.
 *
 *
 *
 *
 *
 *
 * ugh.
 *
 *
 *
 *
 *
 *
 *
 * See you later...I guess.
 *
 */

"""
]

# body selector
$body = document.getElementsByTagName("body")[0]

# easily create element with id
createElement = (tag, id) ->
  el = document.createElement tag
  el.id = id if id
  return el

# create our primary elements
_style_elem 	= createElement "style", "style-elem"
_code_pre 		= createElement "pre",   "my-code"
_script_area 	= createElement "div",   "script-area"

# append our primary elements to the body
$body.appendChild _style_elem
$body.appendChild _code_pre
$body.appendChild _script_area

# select our primary elements
$style_elem 	= document.getElementById "style-elem"
$code_pre 		= document.getElementById "my-code"
$script_area 	= document.getElementById "script-area"

# tracking states
openComment = false
openInteger = false
openString = false
prevAsterisk = false
prevSlash = false


# script syntax highlighting logic
scriptSyntax = (string, which) ->

  # if end of integer (%, ., or px too)
  if openInteger && !which.match(/[0-9\.]/) && !openString && !openComment
    s = string.replace(/([0-9\.]*)$/, "<em class=\"int\">$1</em>" + which)

  # open comment detection
  else if which == '*' && !openComment && prevSlash
    openComment = true
    s = string + which

  # closed comment detection
  else if which == '/' && openComment && prevAsterisk
    openComment = false
    s = string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>")

  # var detection
  else if which == 'r' && !openComment && string.match(/[\n ]va$/)
    s = string.replace(/va$/, "<em class=\"var\">var</em>")

  # operator detection
  else if which.match(/[\!\=\-\?]$/) && !openString && !openComment
    s = string + "<em class=\"operator\">" + which + "</em>"

  # pre paren detection
  else if which == "(" && !openString && !openComment
    s = string.replace(/(\.)?(?:([^\.\n]*))$/, "$1<em class=\"method\">$2</em>(")

  # detecting quotes
  else if which == '"' && !openComment
    s = if openString then string.replace(/(\"[^"\\]*(?:\\.[^"\\]*)*)$/, "<em class=\"string\">$1\"</em>") else string + which

  # detecting run script command ~
  else if which == "~" && !openComment
    s = string + "<em class=\"run-command\">" + which + "</em>"

  # ignore syntax temporarily or permanently
  else
    s = string + which

  # return script formatted string
  return s


# style syntax highlighting logic
styleSyntax = (string, which) ->

  # if end of integer (%, ., or px too), close it and continue
  if openInteger && !which.match(/[0-9\.\%pxems]/) && !openString && !openComment
    preformatted_string = string.replace(/([0-9\.\%pxems]*)$/, "<em class=\"int\">$1</em>")
  else
    preformatted_string = string

  # open comment detection
  if which == '*' && !openComment && prevSlash
    openComment = true
    s = preformatted_string + which

  # closed comment detection
  else if which == '/' && openComment && prevAsterisk
    openComment = false
    s = preformatted_string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>")

  # wrap style declaration
  else if which == ':'
    s = preformatted_string.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:')

  # wrap style value
  else if which == ';'
    # detect hex code
    crazy_reghex = /((#[0-9a-zA-Z]{6})|#(([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){12,14}|([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){8,10}))$/

    # is hex
    if preformatted_string.match(crazy_reghex)
      s = preformatted_string.replace(crazy_reghex, '<em class="hex">$1</em>;')
    # is standard value
    else
      s = preformatted_string.replace(/([^:]*)$/, '<em class="value">$1</em>;')

  # wrap selector
  else if which == '{'
    s = preformatted_string.replace(/(.*)$/, '<em class="selector">$1</em>{')

  # ignore syntax temporarily or permanently
  else
    s = preformatted_string + which

  # return style formatted string
  return s


__js = false
_code_block = ""

# write a single character
writeChar = (which) ->

  # toggle CSS/JS on `
  if which == "`"
		# reset it to empty string so as not to show in DOM
    which = ""
    __js = !__js

  # Using JS
  if __js
    # running a command block. initiated with "~"
    if which == "~" && !openComment
      script_tag = createElement "script"
      # two matches based on prior scenario
      prior_comment_match = /(?:\*\/([^\~]*))$/
      prior_block_match = /([^~]*)$/

      if _code_block.match(prior_comment_match)
        script_tag.innerHTML = _code_block.match(prior_comment_match)[0].replace("*/", "") + "\n\n"
      else
        script_tag.innerHTML = _code_block.match(prior_block_match)[0] + "\n\n"

      $script_area.innerHTML = ""
      $script_area.appendChild script_tag
    char = which
    code_html = scriptSyntax($code_pre.innerHTML, char)

  # Using CSS
  else
    char = if which == "~" then "" else which
    $style_elem.innerHTML += char
    code_html = styleSyntax($code_pre.innerHTML, char)


  # set states
  prevAsterisk = (which == "*")
  prevSlash = (which == "/") && !openComment
  openInteger = if which.match(/[0-9]/) || (openInteger && which.match(/[\.\%pxems]/)) then true else false
  if which == '"' then openString = !openString

  # add text to code block variable for regex matching.
  _code_block += which

  # add character to pre
  $code_pre.innerHTML = code_html

# write all the chars
writeChars = (message, index, interval) ->
  if index < message.length
    if index >= _throttle.start && index < _throttle.stop
      interval = 2
    else
      interval = _writing_rate
    $code_pre.scrollTop = $code_pre.scrollHeight
    writeChar message[index++]
    setTimeout (->
      writeChars message, index, interval
    ), interval

# detect url parameters
getURLParam = (key, url) ->
  if typeof url == 'undefined'
    url = window.location.href
  match = url.match('[?&]' + key + '=([^&]+)')
  if match then match[1] else 0

# has version parameter?
_version = getURLParam "billy"

# initiate the script
writeChars(_codes[_version], 0, _writing_rate)

###
Changelog:
1.0.0: i exist!
1.0.1: `overflow: auto` on `pre`
###
